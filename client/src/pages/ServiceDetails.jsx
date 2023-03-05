import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';

const ServiceDetails = () => {
    
    return (
        <>
            <Layout>
                <PageHeader title='Single Service' />
                <div className='container'>
                    <h1 className='py-5 my-5'>Service Details</h1>
                </div>
            </Layout>
        </>
    );
};

export default ServiceDetails;
