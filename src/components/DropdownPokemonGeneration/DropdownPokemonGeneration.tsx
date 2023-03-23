export default function DropdownPokemonGeneration() {
  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn bg-blue-800 border-none hover:bg-blue-600"
      >
        Filter: Generation
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        <li>
          <a className="active:bg-blue-800">I</a>
        </li>
        <li>
          <a className="active:bg-blue-800">II</a>
        </li>
        <li>
          <a className="active:bg-blue-800">III</a>
        </li>
        <li>
          <a className="active:bg-blue-800">IV</a>
        </li>
        <li>
          <a className="active:bg-blue-800">V</a>
        </li>
        <li>
          <a className="active:bg-blue-800">VI</a>
        </li>
        <li>
          <a className="active:bg-blue-800">VII</a>
        </li>
        <li>
          <a className="active:bg-blue-800">VIII</a>
        </li>
      </ul>
    </div>
  );
}
