import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

export const PaymentsPage = () => {
    const [category, setCategory] = useState('МУИТ');

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    const categories = [
      { value: 'МУИТ', label: 'МУИТ' },
      { value: 'КОМТЕХНО И КИТЭ', label: 'Выпускники колледжей КОМТЕХНО И КИТЭ' },
      { value: 'КР', label: 'Выпускники колледжей КР' }
    ];
  
    const tableData = {
      'МУИТ': [
        { code: '71200', program: 'Program A', duration: '4 years', fee: '10000' },
        // add more data as needed
      ],
      'КОМТЕХНО И КИТЭ': [
        { code: '71201', program: 'Program B', duration: '3 years', fee: '9000' },
        // add more data as needed
      ],
      'КР': [
        { code: '71202', program: 'Program C', duration: '2 years', fee: '8000' },
        // add more data as needed
      ]
    };
  
    return (
      <div>
        <Select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
  
        <TableContainer component={Paper} className="my-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>КОД</TableCell>
                <TableCell>Направление (профили и специальности)</TableCell>
                <TableCell>Срок обучения</TableCell>
                <TableCell>Стоимость обучения</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData[category].map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.program}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  