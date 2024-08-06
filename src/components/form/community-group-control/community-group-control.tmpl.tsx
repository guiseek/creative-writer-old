import {useValue} from '@base/utils/parsers'
import {CommunityGroupAttrs} from './community-group-control.attrs'
import {Group} from '@renderers/community-group'

export const CommunityGroupControlTmpl = (attrs: CommunityGroupAttrs) => {
  const selected = useValue<Group, 'name'>({name: '-- Community group --', id: '', logo: ''}, 'name')

  const onChange = (group: Group | null) => {
    return function onChange(this: HTMLInputElement) {
      if (group) {
        attrs.onChange(group)
        selected.set(group)
      }
    }
  }

  // selected.textContent = attrs.groups[0].name;

  return (
    <details className="dropdown">
      <summary>{selected.text}</summary>
      <ul>
        {attrs.groups.map((group) => (
          <li>
            <label>
              <input
                type="radio"
                name="communityGroup"
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
