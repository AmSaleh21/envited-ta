import './Event.css'

const Event = () => {

    const event = JSON.parse(localStorage.getItem('eventData'))

    return (
        <div className={'row flex-wrap'}>
            <div className={'col-sm-12 col-md-12 col-lg-6 event-image-container mt-md-5 mt-lg-5'}/>
            <div className={'col-sm-12 col-md-12 col-lg-6 d-flex flex-column event-container'}>
                <h2 className={'fw-bolder mt-1 pt-1 mb-0 pb-0'}>{event.eventName}</h2>
                <p> hosted by {event.hostName}</p>

                <div className={'row py-2'}>
                    <i className={'col-2 align-self-center fa fa-calendar'}
                       style={{'color': '#8456EC'}}/>
                    <span className={'col-10'}>
                        <p className={'fw-bold m-0'}>{event.startDate}</p>
                        <p className={'m-0'}>to {event.endDate}</p>
                    </span>
                </div>

                <div className={'row py-2'}>
                    <i className={'col-2 align-self-center fa fa-map-marker'}
                       style={{'color': '#8456EC'}}/>
                    <span className={'col-10'}>
                        <p className={'fw-bold m-0'}>Street name</p>
                        <p className={'m-0'}>to {event.location}</p>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Event;
