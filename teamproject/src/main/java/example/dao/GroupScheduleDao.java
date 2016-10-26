package example.dao;

import java.util.List;
import java.util.Map;

import example.vo.Event;

public interface GroupScheduleDao {
	
	GroupScheduleDao selectOneByEmailAndPassword(Map<String, Object> paramMap);
	
	List<Event> selectList(Map<String, Object> paramMap) throws Exception;
	Event selectOne(int no) throws Exception;  
	Event selectOneByPassword(Map<String, Object> paramMap) throws Exception;    
  int insert(Event event) throws Exception;
  int update(Event event) throws Exception;
  int delete(int no) throws Exception;
}
