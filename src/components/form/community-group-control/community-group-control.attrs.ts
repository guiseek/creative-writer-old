import {Group} from '@renderers/community-group'

export interface CommunityGroupAttrs {
  groups: Group[]
  onChange(group: Group): void
}
