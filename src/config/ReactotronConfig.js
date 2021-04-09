import Reactotron from 'reactotron-react-native'

const reactotron = Reactotron
    .configure({ name: 'Ekskul-Id', host: '192.168.43.204' })
    .useReactNative()

if (reactotron) {
  reactotron.connect()
  reactotron.clear()
}
export default reactotron
console.tron = reactotron