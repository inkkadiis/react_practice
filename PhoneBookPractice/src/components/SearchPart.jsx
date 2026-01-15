import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useSearchStore from "../Stores/useSearchStore";

const SearchPart = () => {
  const { keyword, setKeyword } = useSearchStore();
  return (
    <div>
      <TextField
        variant="standard" // 핵심: 이것이 언더바 스타일을 만듭니다
        placeholder="검색"
        sx={{ width: 400 }} // 너비 설정
        InputProps={{
          // 아이콘을 입력창 끝(end)에 붙이기
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchPart;
