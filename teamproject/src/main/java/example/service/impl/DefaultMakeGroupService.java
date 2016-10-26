package example.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.dao.MakeGroupDao;
import example.service.MakeGroupService;
import example.vo.MakeGroup;

@Service 
public class DefaultMakeGroupService implements MakeGroupService{
	@Autowired MakeGroupDao makeGroupDao;

	public List<MakeGroup> getMakeGroupList() throws Exception {
			return makeGroupDao.selectList();
	}

	
	public MakeGroup getMakeGroup(int no) throws Exception{
			MakeGroup makeGroup = makeGroupDao.selectOne(no);		
			if (makeGroup == null)
				throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
			return makeGroupDao.selectOne(no);

	}
	
	
	public void updateMakeGroup(MakeGroup makeGroup) throws Exception{
			HashMap<String,Object> paramMap = new HashMap<>();
			paramMap.put("no", makeGroup.getNo());

			if (makeGroupDao.selectOneByPassword(paramMap) == null) {
				throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다.!");
			}
			makeGroupDao.update(makeGroup);
		
	}
	
		public void deleteMakeGroup(int no) throws Exception {
				if (makeGroupDao.delete(no) == 0) {
					throw new Exception("삭제 실패입니다");
				}
				makeGroupDao.delete(no);
		}

}
