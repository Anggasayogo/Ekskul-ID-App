import { connect } from '../../themes/OsmiProvider'

export default connect({
  container: 'flex bg-white',
  button: "bg-primary full self-center rounded-lg p-3 mt-3",
  label: "text-base text-center text-white font-bold",
  middle: "items-center justify-center mt-4 mb-7 row flex px-4",
  line: "border-b full border-gray-default",
  or: "text-sm text-gray-default font-regular absolute bg-white px-2",
  keyBoard: 'mt-3 mb-3 px-4',
  btnBack: "row items-center",
  icons: "w-24 h-24",
  left: "mt-7",
  labelLogin: "font-medium text-14",
  title: "text-24 font-medium",
  childTitle: "text-14 font-regular my-2",
  loginWith: "flex text-center font-bold text-14",
  btnSosmed: "border-1 border-gray-default rounded-7 py-3 row px-2 items-center my-1 flex mx-3",
  noHaveAccount: "text-center my-4 font-regular text-14",
  privacy: "mx-4 font-regular text-center mt-7",
})