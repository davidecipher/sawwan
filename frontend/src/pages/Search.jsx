import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Search() {

    const { term } = useParams();
    const [listings, setListings] = useState([]);

    const getListings = async () => {
        const response = await fetch('/api/listings');
        const json = await response.json();
        setListings(json);
    }

    useEffect(() => {
        getListings();
    }, []);

    return(
        <main>
        <section className="category_block">
            <h3 className='align_self_corrections'>Results for "{ term }".</h3>
        </section> 
        <section className='listings'>
        { listings &&
            listings.filter((listing) => {
                if(listing.title.toLowerCase().includes(term.toLowerCase()) || listing.category.toLowerCase().includes(term.toLowerCase())){
                    return listing;
                }
            }).map((listing) => {
                return <Link to={`/listing/${listing._id}`} key={listing._id}>
                    <div className="card">
                        <div className='image_box'>
                            <img src={listing.image} alt={`${listing.title}`} />
                            <h3>{ listing.title }</h3>
                            <p>{ listing.description.substring(0, 50) }....</p>
                            <h4>{ listing.price } Ksh.</h4>
                        </div>
                    </div>
                </Link>
            }) 
            }
        </section> 

            {
                !listings < 1 && 
                <section className='no_listings'>
                    <h2>No results found for "{ term }".</h2>
                </section>
            }
        </main>
    )
}