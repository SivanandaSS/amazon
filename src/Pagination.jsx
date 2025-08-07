import { Pagination } from "react-bootstrap";



function HandlePagination ({ totalPages, currentPage, setCurrentPage }) {
    return (
        <Pagination className="justify-content-center">
                {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item
                        key={i}
                        active={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        >
                        {i + 1}
                    </Pagination.Item>
                ))}
            </Pagination>

    );
    
}
export default HandlePagination