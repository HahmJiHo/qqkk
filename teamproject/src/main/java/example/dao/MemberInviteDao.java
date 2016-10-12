package example.dao;

import java.util.List;
import java.util.Map;

import example.vo.MemberInvite;

public interface MemberInviteDao {
	
	List<MemberInvite> selectList(Map<String, Object> paramMap) throws Exception;	
  int insert(MemberInvite memberInvite) throws Exception;
  int delete(int no) throws Exception;
}
