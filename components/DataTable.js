import AddSiteModal from './AddSiteModal';
import { format, parseISO } from 'date-fns'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import NextLink from 'next/link'

const DataTable = ({ sites }) => {
  return (
      <Table colorScheme='twitter' bgColor='white' boxShadow='xl'>
        <Thead bgColor='whitesmoke'>
          <Tr>
            <Td>Name</Td>
            <Td>Site Link</Td>
            <Td>FeedBack Link</Td>
            <Td>Create_at</Td>
          </Tr>
        </Thead>
        <Tbody>
          {sites.map((site) => {
            return (
              <Tr key={site.url}>
                <Td fontWeight='bold'>{site.site}</Td>
                <Td>{site.url}</Td>
                <Td>
                  <NextLink href='/sites/[siteId]' as={`/sites/${site.id}`}>
                    <a>View FeedBack</a>
                  </NextLink>
                </Td>
                <Td>{format(parseISO(site.createAt),'yyyy-MM-dd')}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
  );
};

export default DataTable;
