import FreeTrial from '../components/FreeTrial';
import HowWeWork from '../components/HowWeWork';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import AboutImg from './../assets/hero3.png';
const Aboutpage = () => {
    return (
        <>
            <Layout>
                <PageHeader title='About Page' />
                <div className='about-info'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-md-6'>
                                <img
                                    src={AboutImg}
                                    alt=''
                                    className='w-100 p-5'
                                />
                            </div>
                            <div className='col-md-6'>
                                <p className='fw-semibold custom-color mb-0 pb-0'>
                                    Know more about us
                                </p>
                                <h2 className='pb-2'>
                                    We are service providing marketplace
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Beatae quasi deserunt, a
                                    velit perferendis itaque commodi accusamus
                                    eum quisquam illo exercitationem corporis
                                    aperiam voluptatibus dignissimos minus in
                                    asperiores maxime! Placeat.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Beatae quasi deserunt, a
                                    velit perferendis itaque commodi accusamus
                                    eum quisquam illo exercitationem corporis
                                    aperiam voluptatibus dignissimos minus in
                                    asperiores maxime! Placeat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <HowWeWork />
                <FreeTrial />
            </Layout>
        </>
    );
};

export default Aboutpage;
