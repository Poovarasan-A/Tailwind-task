import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { dummyDatas } from "./data";
import {
  Breadcrumbs,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";

const Hero = () => {
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [dateOrder, setDateOrder] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleDateOrderChange = (order) => {
    setDateOrder(order);
    setCurrentPage(1);
    handleClose();
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const filteredData = dummyDatas
    .filter(
      (data) =>
        data.name.toLowerCase().includes(searchTerm) ||
        data.email.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        console.error("Invalid date format:", a.date, b.date);
        return 0;
      }
      if (dateOrder === "newest") {
        return dateB - dateA;
      } else if (dateOrder === "oldest") {
        return dateA - dateB;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <section className="w-full h-full flex flex-col py-6 px-14 bg-senary">
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
          <Link key="2" underline="hover" color="text.primary">
            List
          </Link>
        </Breadcrumbs>
      </Stack>
      <div className="w-full h-[30vh] flex items-center justify-between ">
        <TextField
          sx={{ m: 1, width: "35ch" }}
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            sx: {
              height: "40px",
              borderRadius: "30px",
            },
            endAdornment: (
              <InputAdornment position="start">
                <BiSearch className="text-xl" />
              </InputAdornment>
            ),
          }}
        />
        <div className="flex items-center gap-6">
          <FormControl sx={{ minWidth: 120, margin: 1 }}>
            <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
            <Select
              labelId="rows-per-page-label"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              label="Rows per page"
              placeholder={rowsPerPage}
              sx={{
                height: "40px",
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </FormControl>

          <Button
            id="filter-button"
            aria-controls={open ? "filter-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<FiFilter />}
          >
            Filter
          </Button>
          <Menu
            id="filter-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "filter-button",
            }}
          >
            <MenuItem onClick={() => handleDateOrderChange("newest")}>
              Newest First
            </MenuItem>
            <MenuItem onClick={() => handleDateOrderChange("oldest")}>
              Oldest First
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">Actions</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>{data.role}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary">
                      Forward
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Report
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      Normalize
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Update Status
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="w-full flex items-center justify-center py-4">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
