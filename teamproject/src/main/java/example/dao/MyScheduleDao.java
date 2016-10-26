package example.dao;

import java.util.List;
import java.util.Map;

import example.vo.MySchedule;

public interface MyScheduleDao {
  MySchedule selectOneByEmailAndPassword(Map<String, Object> paramMap);
  
  List<MySchedule> selectList(Map<String, Object> paramMap) throws Exception;
  MySchedule selectOneByScheduleNo(int groupscNo) throws Exception;   
  MySchedule selectOneByMemberNo(int no) throws Exception; 
  MySchedule selectOneByPassword(Map<String, Object> paramMap) throws Exception;   
  int insert(MySchedule myschedule) throws Exception;
  int update(MySchedule myschedule) throws Exception;
  int delete(int no) throws Exception;
}
