import React from 'react'
import { EditorState, RichUtils } from 'draft-js'
import { ENTITY } from '@kids-reporter/draft-renderer'

type AnchorButtonProps = {
  className?: string
  isActive: boolean
  editorState: EditorState
  onChange: (arg0: EditorState) => void
}

export const AnchorButton = (props: AnchorButtonProps) => {
  const toggleEntity = RichUtils.toggleLink
  const { isActive, editorState, onChange } = props

  const promptForAnchor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    const selection = editorState.getSelection()
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent()
      const startKey = selection.getStartKey()
      const block = contentState.getBlockForKey(startKey)
      const start = selection.getStartOffset()
      const end = selection.getEndOffset()
      const selectedText = block.getText().slice(start, end)
      const contentStateWithEntity = contentState.createEntity(
        ENTITY.Anchor,
        'MUTABLE',
        {
          anchorID: selectedText,
        }
      )
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
      const newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      })

      onChange(
        toggleEntity(newEditorState, newEditorState.getSelection(), entityKey)
      )
    }
  }

  const removeAnchor = () => {
    const selection = editorState.getSelection()
    if (!selection.isCollapsed()) {
      onChange(toggleEntity(editorState, selection, null))
    }
  }

  return (
    <div
      className={props.className}
      onMouseDown={isActive ? removeAnchor : promptForAnchor}
      title="錨點"
    >
      <span>錨</span>
    </div>
  )
}