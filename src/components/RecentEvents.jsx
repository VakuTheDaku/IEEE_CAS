const RecentEvents = () => {
    return (
    <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
            <img
                src="https://via.placeholder.com/365x450.png?text=Event1"
                className="block w-full"
                alt="Wild Landscape"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://via.placeholder.com/365x450.png?text=Event2"
                className="block w-full"
                alt="Camera"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://via.placeholder.com/365x450.png?text=Event3"
                className="block w-full"
                alt="Exotic Fruits"
            />
            </div>
        </div>
    </div>
    );
}

export default RecentEvents;