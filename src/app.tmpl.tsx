import {BackgroundImageControl} from '@components/form/background-image-control'
import {Presentation, PresentationsGroup} from '@renderers/presentation-group'
import {BackgroundImageLayer} from '@renderers/background-image'
import {InformationGroup} from '@renderers/information-group'
import {CommunityGroup} from '@renderers/community-group'
import {PresentationDialog} from '@components/dialog'
import {PosterCanvas} from '@renderers/poster-canvas'
import {DownloadButton} from '@components/button'
import {GridLayer} from '@renderers/grid-layer'
import {formValue} from '@base/utils/parsers'
import {dialog} from '@base/utils/factories'
import {Model} from './interfaces'
import {config} from './config'
import {
  GridActive,
  PosterForm,
  TimeControl,
  DateControl,
  FieldSetGroup,
  LocationControl,
  CommunityGroupControl,
} from '@components/form'
import {use} from '@websqnl/di'
import {ImageCollection} from '@data-access/infra'
import {DevParanaLayer} from '@renderers/dev-parana'

export const AppRootTmpl = () => {
  const canvas = new PosterCanvas()
  canvas.width = config.width
  canvas.height = config.height

  const form = new PosterForm()

  const control = {
    date: new DateControl(),
    time: new TimeControl(),
    gridActive: new GridActive(),
    communityGroup: new CommunityGroupControl(),
    location: new LocationControl(),
    backgroundImage: new BackgroundImageControl(),
  }

  const dateTime = new FieldSetGroup('Date & Time', control.date, control.time)
  const header = new FieldSetGroup(
    'Header',
    control.backgroundImage,
    control.communityGroup
  )
  // const section = {dateTime, header}
  form.append(header, dateTime)
  form.add(control.location, 'Location', 'before')
  form.add(control.gridActive, 'Grid active', 'after')

  /**
   * Grid
   */
  const grid = new GridLayer(config.width, config.height, 0, 0)

  grid.active = control.gridActive.checked
  grid.cols = config.cols
  grid.rows = config.rows
  grid.order = 10

  canvas.addLayer(grid)

  const imageCollection = use(ImageCollection)
  imageCollection.findAll().then(console.log)

  /**
   * Background
   */
  // const background = new ImageLayer(config.width, config.height, 0, 0)
  const backgroundImage = new BackgroundImageLayer(
    config.width,
    config.height,
    0,
    0
  )

  backgroundImage.image.src =
    control.backgroundImage.selected?.image ?? 'images/ladrilhos.svg'

  canvas.addLayer(backgroundImage)

  const devParana = new DevParanaLayer(config.width, config.height)

  canvas.addLayer(devParana)

  const community = new CommunityGroup(config.width, config.row * 2, 0, 0)

  community.addCommunity(control.communityGroup.groups[0])
  canvas.addLayer(community)

  /**
   * Presentation
   */
  const x = 20
  const y = config.row / 2
  const presentation = new PresentationsGroup(
    config.width,
    config.row * 4,
    x,
    y
  )

  canvas.addLayer(presentation)

  /**
   * Information
   */
  const information = new InformationGroup(
    config.width,
    config.row,
    0,
    config.row * 4.2
  )

  information.addInformation(
    '__ __ ____',
    '__ __',
    '_________________________________'
  )

  canvas.addLayer(information)

  form.addEventListener('change', () => {
    const model = formValue<Model>(form)
    if (model.date) {
      model.date.setDate(model.date.getDate() + 1)
      information.setInformation(
        model.date.toLocaleDateString(),
        model.time,
        model.location
      )
    }

    grid.active = !!model.gridActive

    if (control.communityGroup.selected) {
      community.clear()
      const {selected} = control.communityGroup
      community.name.text = selected.name
      community.logo.image.src = selected.logo
    }

    canvas.render()
  })

  const onCreateGroup = () => {
    const onConfirm = ({title, ...speaker}: Presentation) => {
      presentation.addPresentation(title, speaker)
      canvas.render().then()
    }

    dialog(
      'create-presentation',
      <PresentationDialog onConfirm={onConfirm} />
    ).then(console.log)
  }

  canvas.render()

  return (
    <>
      <main>
        <section>{canvas}</section>
        <section>
          {form}
          <footer>
            <button type="button" onClick={onCreateGroup}>
              Add speaker
            </button>
            <DownloadButton canvasId="poster" />
          </footer>
        </section>
      </main>
    </>
  )
}
