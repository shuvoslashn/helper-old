import SectionHeader from './SectionHeader';

const HowWeWork = () => {
    return (
        <section className='how-we-work bg-light py-5'>
            <div className='container'>
                <SectionHeader
                    title='How We Work'
                    subtitle='Know more about us'
                />
                <div className='work-card mt-4 py-2'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='work-single-card rounded-3 p-4 border-0 shadow-custom'>
                                <i className='bi bi-search-heart' />
                                <h5 className='pt-2'>Search service</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Placeat sunt molestiae.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='work-single-card rounded-3 p-4 border-0 shadow-custom'>
                                <i className='bi bi-arrow-through-heart' />
                                <h5 className='pt-2'>Choose One</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Placeat sunt molestiae.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='work-single-card rounded-3 p-4 border-0 shadow-custom'>
                                <i className='bi bi-bullseye' />
                                <h5 className='pt-2'>Order service</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Placeat sunt molestiae.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='work-single-card rounded-3 p-4 border-0 shadow-custom'>
                                <i className='bi bi-balloon' />
                                <h5 className='pt-2'>Enjoy Life</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Placeat sunt molestiae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
