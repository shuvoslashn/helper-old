import freeTrial from './../assets/freeTrial.png';

const FreeTrial = () => {
    return (
        <div className='free-trial py-5'>
            <div className='container py-3'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-md-5'>
                        <img src={freeTrial} alt='' className='w-100' />
                    </div>
                    <div className='col-md-5'>
                        <div className='trial-info'>
                            <p className='fw-semibold custom-color mb-0 pb-0'>
                                Enjoy Our Free Traial
                            </p>
                            <h2>We are offering 14 days free trial</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Libero qui quia at! Sapiente
                                laboriosam quod nisi, soluta ratione architecto
                                dolor. <br />
                                Omnis odit iure esse officia ad nam magni
                                commodi beatae, lab ut natus dolor placeat.
                            </p>
                            <a href='/' className='btn btn-outline-dark'>
                                Try our free trial
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTrial;
