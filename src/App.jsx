import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

import store from './store'
import RutasConfig from './components/config/RutasConfig'

const ver_pruebas = window.env.VITE_ENTORNO_PRUEBAS || "false";
function App() {
  return (
    <>
      {ver_pruebas === "true" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 pointer-events-none">
        <span className="text-6xl font-semibold text-black-400 opacity-40">Versión de prueba</span>
      </div>
      )}
      <Provider store={store}>{/* Provider is used to pass the Redux store to the components */}
        <RutasConfig />{/* RutasConfig is used to define the routes of the application */}
      </Provider>
      <ToastContainer />{/* ToastContainer is used to display toast notifications */}
    </>
  )
}

export default App
