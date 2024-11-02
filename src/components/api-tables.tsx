import Link from "@docusaurus/Link";

type propertyType = string | { link: string; type: string };

type ITableItem = {
  propertyName: string;
  type: propertyType;
  description: string;
};

interface ITable {
  items: ITableItem[];
}

function isLink(
  property: propertyType
): property is { link: string; type: string } {
  if (typeof property === "object" && property.link && property.type) {
    return true;
  } else {
    return false;
  }
}

export default function Table({ items }: ITable): JSX.Element {

  return (
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Types</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const propertyName = item.propertyName;
          const propertyType = item.type;
          const propertyTypeValue = isLink(propertyType) ? (
            <Link to={propertyType.link}>{propertyType.type}</Link>
          ) : (
            propertyType
          );
          const propertyDescription = item.description;
          return (
            <tr key={index}>
              <td>{propertyName}</td>
              <td>{propertyTypeValue}</td>
              <td>{propertyDescription}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
