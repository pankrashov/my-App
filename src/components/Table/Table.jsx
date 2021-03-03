
const Table = (dataTable) => {
  const dat = dataTable.dataTable;

  const Row = dat.map((user, i) => {
    return (
      <div className="table__row" key={i}>
        <div className="table__col">
          {user.id}
        </div>
        <div className="table__col">
        {user.title}
        </div>
        <div className="table__col">
          {user.email ? user.email : '--'}
        </div>
        <div className="table__col">
          {user.phone ? user.phone : '--'}
        </div>
    </div>
    )
  });

  return (
    <div className="table">
      <div className="table__row">
        <div className="table__col">
          id
        </div>
        <div className="table__col">
        title
        </div>
        <div className="table__col">
          email
        </div>
        <div className="table__col">
          phone
        </div>
      </div>
      {Row}
    </div>
  );
}

export {Table};
