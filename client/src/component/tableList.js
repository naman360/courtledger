import React from "react";
import { Table, Icon } from "semantic-ui-react";
import "../App.css";
class TableList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      props1: this.props,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ props1: newProps });
  }
  render() {
    const custom_primary = {
      backgroundColor: "#2185d0",
      color: "#fbfbfb",
      border: "1px solid #fbfbfb",
    };
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={custom_primary}>
              File Name
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="2" style={custom_primary}>
              File Hash
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.props1?.fileList?.length === 0 ? (
            <Table.Row>
              <Table.Cell />
              <Table.Cell colSpan="2" textAlign="center">
                No Data
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
          ) : (
            this.state.props1?.fileList?.map((aFile) => (
              <Table.Row key={aFile.filename}>
                <Table.Cell
                  onClick={() =>
                    window.open(
                      `https://res.cloudinary.com/moibit/image/upload/v1684528022/${aFile.filehash}`,
                      "_blank"
                    )
                  }
                  className="hashHover"
                >
                  {aFile?.filename}
                </Table.Cell>
                <Table.Cell colSpan="2">
                  <p> {aFile?.filehash}</p>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    );
  }
}
export default TableList;
