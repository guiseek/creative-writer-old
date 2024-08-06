import {BackgroundImageAttrs} from './background-image-control.attrs'
import {BackgroundImage} from '@renderers/background-image'
import {useValue} from '@base/utils/parsers'

export const BackgroundImageControlTmpl = (attrs: BackgroundImageAttrs) => {
  const selected = useValue<BackgroundImage, 'name'>(
    {name: '-- Background Image --', id: '', image: ''},
    'name'
  )

  const onChange = (group: BackgroundImage | null) => {
    return function onChange(this: HTMLInputElement) {
      if (group) {
        attrs.onChange(group)
        selected.set(group)
      }
    }
  }

  // selected.textContent = attrs.images[0].name;

  return (
    <details className="dropdown">
      <summary>{selected.text}</summary>
      <ul>
        {attrs.images.map((group) => (
          <li>
            <label>
              <input
                type="radio"
                name="backgroundImage"
                value={group.id}
                onChange={onChange(group)}
              />
              {group.name}
            </label>
          </li>
        ))}
      </ul>
    </details>
  )
}
