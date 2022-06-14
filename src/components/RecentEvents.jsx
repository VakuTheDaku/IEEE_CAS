const RecentEvents = () => {
    return (
    <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
            <img
                src="https://pes.ieeekerala.org/wp-content/uploads/elementor/thumbs/enironment_day-ppx75myelkmo9pisxpo12cxsjmwpexithbnazt9s74.jpeg"
                className="block w-full"
                alt="Wild Landscape"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://pes.ieeekerala.org/wp-content/uploads/elementor/thumbs/chairs_meet-ppmrc938cfx69dpj1k840galu7ixk2sup319thfc3k.jpeg"
                className="block w-full"
                alt="Camera"
            />
            </div>
            <div className="carousel-item relative float-left w-full">
            <img
                src="https://pes.ieeekerala.org/wp-content/uploads/elementor/thumbs/enironment_day-ppx75myelkmo9pisxpo12cxsjmwpexithbnazt9s74.jpeg"
                className="block w-full"
                alt="Exotic Fruits"
            />
            </div>
        </div>
    </div>
    );
}

export default RecentEvents;