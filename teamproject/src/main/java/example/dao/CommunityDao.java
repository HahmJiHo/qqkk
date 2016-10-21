package example.dao;

import java.util.List;
import java.util.Map;

import example.vo.Community;

public interface CommunityDao {
	
	Community selectOneByEmailAndPassword(Map<String, Object> paramMap);
	
	List<Community> selectList(Map<String, Object> paramMap) throws Exception;
	Community selectOne(int no) throws Exception;  
  Community selectOneByPassword(Map<String, Object> paramMap) throws Exception;    
  int insert(Community community) throws Exception;
  int update(Community community) throws Exception;
  int delete(int no) throws Exception;
}
