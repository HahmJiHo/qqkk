package example.dao;

import java.util.List;

import example.vo.GroupFile;

public interface GroupFileDao {
	
	List<GroupFile> selectList() throws Exception;
	int insert(GroupFile groupFile);
}
