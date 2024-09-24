// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
// import { useState } from 'react'

import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  // const [c,setc] = useState(0)
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p> */}


      <div className=""  style={{height: '5vh'}}>

      </div>
      <div className="" style={{ height: '95vh', backgroundColor: '',display:'flex', width: '100vw' }}>

        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >

          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
        <div className="" style={{backgroundColor:'red',width:'400px'}}>

        </div>
      </div>

      {/* <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
                <div className="action">
          <a target="_blank" rel="noreferrer" onClick={()=>setc(v=>v+1)}>
            add {c}
          </a>
        </div>
      </div> */}
      {/* <Versions></Versions> */}
    </>
  )
}

export default App
