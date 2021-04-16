import './styles.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { styles as s } from './styles'
import Home from './Home/Home'
import Room from './Room/Room'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:5120/graphql/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <s.Page.Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:room" component={Room} />
          </Switch>
        </Router>
      </s.Page.Container>
    </ApolloProvider>
  )
}

export default App;
