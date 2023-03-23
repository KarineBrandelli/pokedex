export default function DropdownPokemonType() {
  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn bg-blue-800 border-none hover:bg-blue-600"
      >
        Filter: Type
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        <li>
          <a className="active:bg-blue-800">bug</a>
        </li>
        <li>
          <a className="active:bg-blue-800">dark</a>
        </li>
        <li>
          <a className="active:bg-blue-800">dragon</a>
        </li>
        <li>
          <a className="active:bg-blue-800">electric</a>
        </li>
        <li>
          <a className="active:bg-blue-800">fairy</a>
        </li>
        <li>
          <a className="active:bg-blue-800">fighting</a>
        </li>
        <li>
          <a className="active:bg-blue-800">fire</a>
        </li>
        <li>
          <a className="active:bg-blue-800">flying</a>
        </li>
        <li>
          <a className="active:bg-blue-800">ghost</a>
        </li>
        <li>
          <a className="active:bg-blue-800">grass</a>
        </li>
        <li>
          <a className="active:bg-blue-800">ground</a>
        </li>
        <li>
          <a className="active:bg-blue-800">ice</a>
        </li>
        <li>
          <a className="active:bg-blue-800">normal</a>
        </li>
        <li>
          <a className="active:bg-blue-800">poison</a>
        </li>
        <li>
          <a className="active:bg-blue-800">psychic</a>
        </li>
        <li>
          <a className="active:bg-blue-800">rock</a>
        </li>
        <li>
          <a className="active:bg-blue-800">steel</a>
        </li>
        <li>
          <a className="active:bg-blue-800">water</a>
        </li>
      </ul>
    </div>
  );
}
