import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import contactImg from './../assets/contact.png';

const Contactpage = () => {
    return (
        <>
            <Layout>
                <PageHeader title='Contact Page' />
                {/* ------------ Info Area Start ------------ */}
                <div className='info-area py-5'>
                    <div className='container'>
                        <div className='row'>
                            {/* Single Column */}
                            <div className='col-md-4'>
                                <div className='single-info'>
                                    <div className='icon-box'>
                                        <i className='bi bi-telephone' />
                                    </div>
                                    <div className='text-box'>
                                        <h5>Phone</h5>
                                        <p>(+880) 1720 000 000</p>
                                    </div>
                                </div>
                            </div>

                            {/* Single Column */}
                            <div className='col-md-4'>
                                <div className='single-info'>
                                    <div className='icon-box'>
                                        <i className='bi bi-envelope' />
                                    </div>
                                    <div className='text-box'>
                                        <h5>Email Address</h5>
                                        <p>support@helper.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Single Column */}
                            <div className='col-md-4'>
                                <div className='single-info'>
                                    <div className='icon-box'>
                                        <i className='bi bi-pin-map' />
                                    </div>
                                    <div className='text-box'>
                                        <h5>Office Address</h5>
                                        <p>Sylhet, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------ Info Area End ------------ */}

                {/* ------------ Contact Form Start ------------ */}
                <div className='contact-form-area bg-light py-5'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-md-6'>
                                <img
                                    src={contactImg}
                                    alt=''
                                    className='w-100 p-5'
                                />
                            </div>
                            <div className='col-md-6'>
                                <div className='form-area'>
                                    <h2>Get in Touch</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quisquam amet esse
                                        officia unde modi ut, similique dolores
                                        temporibus sequi explicabo?
                                    </p>
                                    <form action='/'>
                                        <div className='d-flex gap-3 pb-3'>
                                            <div className='input-box w-100'>
                                                <label htmlFor='fullname'>
                                                    Full name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control mt-1'
                                                    placeholder='ex. Jhon Doe'
                                                    id='fullname'
                                                />
                                            </div>
                                            <div className='input-box w-100'>
                                                <label htmlFor='emailaddress'>
                                                    Email Address
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control mt-1'
                                                    placeholder='ex. 01710 000 000'
                                                    id='emailaddress'
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-3 pb-3'>
                                            <div className='input-box w-100'>
                                                <label htmlFor='subject'>
                                                    Subject
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control mt-1'
                                                    placeholder='ex. Jhon Doe'
                                                    id='subject'
                                                />
                                            </div>
                                            <div className='input-box w-100'>
                                                <label htmlFor='phoneno'>
                                                    Phone Number
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control mt-1'
                                                    placeholder='ex. 01710 000 000'
                                                    id='phoneno'
                                                />
                                            </div>
                                        </div>
                                        <div className='input-box w-100 pb-3'>
                                            <label htmlFor='msg'>
                                                Drop up a message
                                            </label>
                                            <textarea
                                                type='text'
                                                className='form-control mt-1'
                                                placeholder='ex. 01710 000 000'
                                                id='msg'
                                                rows='5'
                                            ></textarea>
                                        </div>
                                        <button
                                            type='submit'
                                            className='btn btn-custom'
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------ Contact Form End ------------ */}

                <div className='mymap'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8510518873677!2d91.84855121480824!3d24.90306178403385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505537d8a66533%3A0xc5a564325239470e!2sBagbari%20Rd%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1677416312191!5m2!1sen!2sbd'
                        width={`100%`}
                        height={350}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    />
                </div>
            </Layout>
        </>
    );
};

export default Contactpage;
