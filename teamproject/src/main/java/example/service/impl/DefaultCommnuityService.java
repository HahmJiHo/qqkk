package example.service.impl;

import java.io.File;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import example.dao.CommunityDao;
import example.dao.CommunityFileDao;
import example.service.CommunityService;
import example.util.FileUploadUtil;
import example.vo.Community;
import example.vo.CommunityFile;

@Service 
public class DefaultCommnuityService implements CommunityService {
  @Autowired CommunityDao communityDao;
  @Autowired CommunityFileDao communityFileDao;
  
  public List<Community> getCommunityList(int pageNo, int length) throws Exception {
    HashMap<String,Object> map = new HashMap<>();
    map.put("startIndex", (pageNo - 1) * length);
    map.put("length", length);
    return communityDao.selectList(map);
  }
  
  public void insertCommunity(Community community, 
      MultipartFile file1,
      MultipartFile file2,
      String uploadDir) throws Exception {
    
    communityDao.insert(community);
    
    String newFileName = null;
    if (file1 != null && !file1.isEmpty()) {
      newFileName = FileUploadUtil.getNewFilename(file1.getOriginalFilename());
      file1.transferTo(new File(uploadDir + newFileName));
      CommunityFile communityFile = new CommunityFile();
      communityFile.setFileName(newFileName);
      communityFile.setCommunityNo(community.getNo());
      //communityFile.setCommunityNo(10200); //트랜잭션 테스트 용 
      communityFileDao.insert(communityFile);
    }
    
    if (file2 != null && !file2.isEmpty()) {
    	newFileName = FileUploadUtil.getNewFilename(file2.getOriginalFilename());;
      file2.transferTo(new File(uploadDir + newFileName));
      CommunityFile communityFile = new CommunityFile();
      communityFile.setFileName(newFileName);
      communityFile.setCommunityNo(community.getNo());
      communityFileDao.insert(communityFile);
    }
  }
  
  public Community getCommunity(int no) throws Exception {
    return communityDao.selectOne(no);
  }
  
  public Community getCommunity(int no, String password) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("no", no);
    paramMap.put("password", password);
    return communityDao.selectOneByPassword(paramMap);
  }
  
  @Override
  public int getTotalPage(int pageSize) throws Exception {
    int countAll = communityDao.countAll();
    int totalPage = countAll / pageSize;
    if ((countAll % pageSize) > 0) {
      totalPage++;
    }
    return totalPage;
  }
  
  public void updateCommunity(Community community) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("no", community.getNo());
    /*paramMap.put("password", community.getPassword());
    
    if (communityDao.selectOneByPassword(paramMap) == null) {
      throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다!");
    }*/
    communityDao.update(community);
  }
  
  public void deleteCommunity(int no) throws Exception {
    communityDao.delete(no);
  }
}







