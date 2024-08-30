import Wrapper from "../assets/wrappers/AllGroups";
import {
  AddButton,
  PageSection,
  SectionCard,
  TableListv4,
} from "../components";
import { getData } from "../utils/groupData";

const AllGroups = () => {
  // const testGroups = [
  //   {
  //     name: "Badminton Mondays",
  //     numOfMembers: 12,
  //     description: "This is a badminton group happening on Mondays",
  //     path: "../g/1",
  //   },
  //   {
  //     name: "Wednesday Warriors",
  //     numOfMembers: 15,
  //     description: "A dedicated badminton group for Wednesdays",
  //     path: "../g/1",
  //   },
  //   {
  //     name: "Weekend Smashers",
  //     numOfMembers: 20,
  //     description: "For those who love badminton on weekends",
  //     path: "../g/1",
  //   },
  //   {
  //     name: "Evening Aces",
  //     numOfMembers: 8,
  //     description: "A group for evening badminton enthusiasts",
  //     path: "../g/1",
  //   },
  //   {
  //     name: "Morning Birdies",
  //     numOfMembers: 10,
  //     description: "Early morning badminton fun",
  //     path: "../g/1",
  //   },
  // ];
  // return (
  //   <Wrapper>
  //     <div className="main-section">
  //       <PageSection title="my groups">
  //         <div className="section-cards">
  //           {testGroups.map((group) => (
  //             <SectionCard key={group.name} {...group} isListStyle />
  //           ))}
  //         </div>
  //       </PageSection>
  //       <PageSection title="other groups">
  //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
  //         dolorem id exercitationem dolores illo eveniet ratione quos inventore
  //         nostrum aut?
  //       </PageSection>
  //     </div>
  //     <AddButton label="Group" />
  //   </Wrapper>
  // );

  const { data, columns } = getData();
  return <TableListv4 data={data} columns={columns} />;
};

export default AllGroups;
