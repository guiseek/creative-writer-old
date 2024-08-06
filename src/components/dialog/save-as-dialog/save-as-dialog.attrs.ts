export interface SaveAs {
  name: string
}

export interface SaveAsDialogAttrs {
  onConfirm(data: SaveAs): void
}

export interface SaveAsDialogProps extends SaveAsDialogAttrs {
  onCancel(): void
}
