

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Grid } from '@mui/material';

const CommonTable = ({ data, columns, rowsPerPageOptions, isPagination }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    console.log(rowsPerPage, rowsPerPageOptions, isPagination, 'rowsPerPage');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <Grid xs={12}>
            <Table variant="T1">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column} variant="TH1">
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsPerPage > 0
                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id}>
                                {row.cells.map((cell, index) => (
                                    <TableCell key={index} variant="TB1" >
                                        {index === 1 ? <img src={cell} alt="" style={{ width: '90px', height: '50px', borderRadius: '8px' }} /> : cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                        : data.map((row) => (
                            <TableRow key={row.id}>
                                {row.cells.map((cell, index) => (
                                    <TableCell key={index} variant="TB1">
                                        {index === 1 ? <img src={cell} alt="thumbnail" style={{ width: '50px', height: '50px' }} /> : cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={columns.length} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {isPagination && <Grid variant="G22" xs={12}>
                <Grid xs={8.7}>
                    <nav className="mt-3">
                        <ul className="pagination">
                            <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageClick(page - 1)}>
                                    Prev
                                </a>
                            </li>
                            {pageNumbers.map((number) => (
                                <li className={`page-item ${page === number - 1 ? 'active' : ''}`} key={number}>
                                    <a className="page-link" href="#" onClick={() => handlePageClick(number - 1)}>
                                        {number}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageClick(page + 1)}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Grid>

                <Grid xs={3} display="flex" alignItems="center" justifyContent="flex-end">
                    <label htmlFor="rowsPerPage">Show:</label>
                    <select
                        id="rowsPerPage"
                        className="form-control"
                        value={rowsPerPage}
                        onChange={handleChangeRowsPerPage}
                        style={{ width: '100px', marginLeft: '10px' }}
                    >
                        {rowsPerPageOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </Grid>
            </Grid>}
        </Grid>
    );
};

export default CommonTable;
