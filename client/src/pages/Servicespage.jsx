import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';
import SingleService from '../components/SingleService';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';

const Servicespage = () => {
    let [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        setLoading(() => (loading = true));
        axios.get('https://dummyjson.com/products').then((res) => {
            setTimeout(() => {
                setLoading(() => (loading = false));
                return setMyData(res.data.products);
            }, 3000);
        });
    }, []);

    return (
        <>
            <Layout>
                <div className='service-search-area text-center pt-5 bg-light'>
                    <div className='container py-5'>
                        <div className='search-area'>
                            <h2 className='pb-3'>
                                Search your favourite Service
                            </h2>
                            <div className='input-group w-50 m-auto'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='ex. Cleaning, Electric, etc'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button className='btn btn-custom'>
                                    Search Now
                                </button>
                            </div>
                        </div>
                        <span className='d-flex justify-content-center'>
                            <Bars
                                height='50'
                                width='50'
                                color='#4ddf9d'
                                ariaLabel='bars-loading'
                                wrapperStyle={{}}
                                wrapperClass='p-5 m-5'
                                visible={loading}
                            />
                        </span>

                        <div className='all-services pt-4'>
                            <div className='row'>
                                {myData
                                    .filter((item) => {
                                        if (search == '') {
                                            return item;
                                        } else if (
                                            item.title
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        ) {
                                            return item;
                                        }
                                    })
                                    .map((service, key) => {
                                        return (
                                            <div key={key} className='col-md-3'>
                                                <a href='/'>
                                                    <SingleService
                                                        img={service.thumbnail}
                                                        title={
                                                            service.title.slice(
                                                                0,
                                                                12
                                                            ) + '...'
                                                        }
                                                        rating={service.rating}
                                                        price={service.price}
                                                        myClass='mySingleService'
                                                    />
                                                </a>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Servicespage;
