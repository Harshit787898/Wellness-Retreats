import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterSection from '../components/FilterSection';
import SearchBar from '../components/SearchBar';
import RetreatList from '../components/RetreatList';
import '../styles/HomePage.css';

function HomePage() {
  const [retreats, setRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRetreats();
  }, [currentPage]);

  const fetchRetreats = async (filters = {}, search = '') => {
    let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=6`;
    
    if (search) {
      url += `&search=${search}`;
    }

    if (filters.type) {
      url += `&filter=${filters.type}`;
    }

    if (filters.location) {
      url += `&location=${filters.location}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRetreats(data);
      // Assume the API returns total pages in the header
      setTotalPages(parseInt(response.headers.get('X-Total-Pages') || 1));
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
  };

  const handleFilter = (filters) => {
    setCurrentPage(1);
    fetchRetreats(filters);
  };

  const handleSearch = (searchTerm) => {
    setCurrentPage(1);
    fetchRetreats({}, searchTerm);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <FilterSection onFilter={handleFilter} />
        <SearchBar onSearch={handleSearch} />
        <RetreatList 
          retreats={retreats} 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </main>
    </div>
  );
}

export default HomePage;