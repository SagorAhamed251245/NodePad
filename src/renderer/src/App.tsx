import { Content, DraggableTopBar, RootLayout, Sidebar } from './components'

function App(): JSX.Element {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-gray-900 ">sidebar</Sidebar>
        <Content className="border-l bg-slate-900 border-l-white/20">content</Content>
      </RootLayout>
    </>
  )
}

export default App
