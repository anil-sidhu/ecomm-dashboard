import  App from './App'
import {connect} from 'react-redux'

import {Login} from './services/action'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    LoginAction:data=>dispatch(Login(data))
}) 
export default connect(mapStateToProps,mapDispatchToProps)(App)

// export default App;