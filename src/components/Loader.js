import loading from '../assets/loading.svg'

export default function Loader() {
    return (
        <div className = "loader">
            <img src={loading} alt="" />
            <p>Loading...</p>
        </div>
    )
}
