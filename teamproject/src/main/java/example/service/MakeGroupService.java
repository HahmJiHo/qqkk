package example.service;

import java.util.List;
import java.util.Map;

import example.vo.MakeGroup;

public interface MakeGroupService {
	
	
	List<MakeGroup> getMakeGroupList() throws Exception;
	MakeGroup getMakeGroup(int no) throws Exception;  
  void updateMakeGroup(MakeGroup makeGroup) throws Exception;

  void deleteMakeGroup(int no) throws Exception;
  
}
