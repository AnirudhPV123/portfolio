import { skills } from "@/constants/skills";
import {
  Container,
  Desc,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillsContainer,
  SkillTitle,
  Title,
  Wrapper,
} from "./SkillsStyles";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the
          past 1 year.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
