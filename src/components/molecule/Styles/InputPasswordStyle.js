import { connect } from '../../../themes/OsmiProvider'

export default connect({
  input: "mb-4",
  inputText: "px-4 py-2 flex border rounded-lg font-regular text-base",
  label: "absolute bg-white left-16 text-base font-regular text-gray-default",
  eye: "absolute top-10 w-24 h-24 right-12 z-10",
  error: "mt-1 text-red-500"
})