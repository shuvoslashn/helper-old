import { Link } from 'react-router-dom';
import heroImg from './../assets/hero2.png';
import peoplesImg from './../assets/peoples.png';
const Hero = () => {
    return (
        <section className='hero-area'>
            <div className='container'>
                <div className='row vh-100 align-items-center justify-content-between'>
                    <div className='col-md-6'>
                        <div className='hero-info'>
                            <h1>
                                Professional services for your home & commercial
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corrupti, fuga? Dolorem
                                maiores minus vitae suscipit. Sapiente rem.
                            </p>
                            <div className='d-flex gap-2 pt-2'>
                                <Link
                                    to={'/services'}
                                    className='btn btn-custom'
                                >
                                    <i className='bi bi-search pe-2' />
                                    Find Services
                                </Link>
                                <Link
                                    to={'/about'}
                                    className='btn btn-outline-custom'
                                >
                                    Know more
                                </Link>
                            </div>
                            <div className='d-flex gap-2 align-items-center pt-4'>
                                <img src={peoplesImg} alt='' className='w-25' />
                                <h6 className='fw-bold'>12k+ Users</h6>
                            </div>
                        </div>
                    </div>
                    {/* Hero Image */}
                    <div className='col-md-6 p-5'>
                        <img src={heroImg} alt='' className='w-100 p-4 pt-5' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
