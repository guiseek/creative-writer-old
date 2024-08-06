import {Presentation} from '@renderers/presentation-group'

export interface PresentationDialogAttrs {
  onConfirm(data: Presentation): void
}

export interface PresentationDialogProps extends PresentationDialogAttrs {
  onCancel(): void
}
