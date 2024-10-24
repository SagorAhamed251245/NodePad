import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note, index) => (
        <li key={index}>
          <span>{note.title}</span>
          <span>{note.lastEditTime}</span>
        </li>
      ))}
    </ul>
  )
}
