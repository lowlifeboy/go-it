import { SearchFieldStyles } from "./SearchFieldStyles";

interface SearchFieldProps {
  handleChangeValue: (value: string) => void;
}

export default function SearchField({ handleChangeValue }: SearchFieldProps) {
  // const [searchText, setSearchText] = useState<string>('');

  function handleChange(value: string) {
    // setSearchText(value);
    handleChangeValue(value);
  }

  return (
    <SearchFieldStyles>
      <div className="fieldWrapper">
        <input type="text" placeholder="Search" onChange={(event) => handleChange(event.target.value)} />
      </div>
    </SearchFieldStyles>
  )
}
