import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from './components'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className=" bg-gray-900 ">
          <div className="border-b  p-2 border-zinc-600/50 ">File name</div>
          <div className="p-2">
            <ActionButtonsRow className="flex justify-between" />
            <NotePreviewList className="text-teal-300  text-md" />
          </div>
        </Sidebar>
        <Content className="border-l bg-slate-900 border-l-white/20">content</Content>
      </RootLayout>
    </>
  )
}

export default App
