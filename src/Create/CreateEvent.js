import React from 'react';
import '../App.css'

const CreateEvent = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 border border-primary">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
                    <form id="contact-form" className="form">
                        <div className="form-group my-3">
                            <label className="form-label" htmlFor="eventName">event name</label>
                            <input type="text" className="form-control" id="eventName" name="eventName"
                                   placeholder="event name" tabIndex="1" required/>
                        </div>

                        <div className="form-group my-3">
                            <label className="form-label" htmlFor="hostName">Host name</label>
                            <input type="text" className="form-control" id="hostName" name="hostName"
                                   placeholder="Host name" tabIndex="1" required/>
                        </div>

                        <div className="form-group my-3">
                            <label className="form-label" htmlFor="hostName">Location</label>
                            <input type="text" className="form-control" id="location" name="location"
                                   placeholder="Location" tabIndex="1" required/>
                        </div>

                        <div className='form-group my-3'>
                            <label className="form-label" htmlFor="startDate">Start Date</label>
                            <div className="input-group date" id="startDate">
                                <input type="text" className="form-control" id="startDate" placeholder='start date'/>
                                <span className="input-group-append">
                              <span className="input-group-text bg-light d-block">
                                <i className="fa fa-calendar"></i>
                              </span>
                            </span>
                            </div>
                        </div>

                        <div className={'form-group my-3'}>
                            <label className="form-label" htmlFor="endDate">End Date</label>
                            <div className="input-group date" id="endDate">
                                <input type="text" className="form-control" id="endDate" placeholder='end date'/>
                                <span className="input-group-append">
                              <span className="input-group-text bg-light d-block">
                                <i className="fa fa-calendar"></i>
                              </span>
                            </span>
                            </div>
                        </div>

                        <div className="mb-3 my-3">
                            <label htmlFor="formFile" className="form-label">please, upload Event photo</label>
                            <input className="form-control" type="file" id="formFile"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="button">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateEvent;
