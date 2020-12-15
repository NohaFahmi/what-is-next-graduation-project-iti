import Loader from 'react-loader-spinner'

const Loading = () => {

    return(
        <Loader
         type="ThreeDots"
         color="grey"
         height={100}
         width={100}
      />
    )
}

export default Loading;